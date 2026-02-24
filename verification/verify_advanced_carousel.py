from playwright.sync_api import sync_playwright, expect
import time
import re

def verify_advanced_carousel():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Navigate to the editor
        page.goto("http://localhost:5500/showcase/editor.html")

        # 2. Wait for loading
        iframe = page.frame_locator("#previewFrame")
        expect(iframe.locator("section#inicio")).to_be_visible(timeout=5000)

        # 3. Open "Servicios" section (which is Carousel by default)
        services_section = page.locator(".section-item").filter(has_text="Servicios")
        services_section.click()

        # 4. Verify "Carrusel Avanzado" controls appear
        advanced_label = services_section.get_by_text("🎡 Carrusel Avanzado")
        expect(advanced_label).to_be_visible()

        # 5. Check initial active state
        # The first item should be active initially (or soon after load)
        first_slide = iframe.locator(".carousel-slide").first

        # Wait for JS to apply active state
        # It adds class 'carousel-active' and style 'transform: scale(...)'
        expect(first_slide).to_have_class(re.compile(r"carousel-active"))
        expect(first_slide).to_have_attribute("style", re.compile(r"scale\("))

        print("Verification passed: Carousel initialized with active state.")

        # 6. Test Scale Control
        # Change scale slider
        scale_slider = services_section.locator("label").filter(has_text="Escala Activo").locator("..").locator("input")
        # Set to max (1.5 -> 150)
        scale_slider.fill("150")
        scale_slider.dispatch_event("input")

        # Verify first slide scaled up
        # We expect scale(1.5)
        time.sleep(0.5)
        expect(first_slide).to_have_attribute("style", re.compile(r"scale\(1\.5"))

        print("Verification passed: Active Scale control updates preview.")

        # 7. Test Scrolling updates active state
        # Scroll the track
        track = iframe.locator(".carousel-track").first
        # Move second slide into view
        # We can execute JS to scroll
        track.evaluate("el => el.scrollBy(350, 0)")

        time.sleep(1) # Wait for Observer

        # Second slide should now be active
        second_slide = iframe.locator(".carousel-slide").nth(1)
        expect(second_slide).to_have_class(re.compile(r"carousel-active"))

        # First slide should NOT be active
        expect(first_slide).not_to_have_class(re.compile(r"carousel-active"))

        print("Verification passed: Scroll updates active state.")

        page.screenshot(path="verification/advanced_carousel.png")
        browser.close()

if __name__ == "__main__":
    verify_advanced_carousel()
