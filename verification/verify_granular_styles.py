from playwright.sync_api import sync_playwright, expect
import time
import re

def verify_granular_styles():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Navigate to the editor
        page.goto("http://localhost:5500/showcase/editor.html")

        # 2. Wait for loading
        iframe = page.frame_locator("#previewFrame")
        expect(iframe.locator("section#inicio")).to_be_visible(timeout=5000)

        # 3. Open "Servicios" section
        services_section = page.locator(".section-item").filter(has_text="Servicios")
        services_section.click()

        # 4. Open Style Panel for first item
        item_card = services_section.locator(".item-card").first
        style_btn = item_card.get_by_role("button", name="🎨 Estilo Individual")
        style_btn.click()

        # 5. Change Background Color to Red
        panel = item_card.locator(".style-override-panel")
        expect(panel).to_be_visible()

        bg_input = panel.locator("input[type='color']").first # First color input is Background
        bg_input.fill("#ff0000")

        # Force blur to trigger update
        bg_input.blur()

        # 6. Verify first card has red background
        first_service = iframe.locator(".service-card").first
        expect(first_service).to_have_attribute("style", re.compile(r"background-color:\s*#ff0000"))

        print("Verification passed: Individual style override applied.")

        # 7. Add Shake Effect with granular config
        # (Assuming effects panel is visible or we scroll to it)

        # 8. Take screenshot
        page.screenshot(path="verification/granular_styles.png")

        browser.close()

if __name__ == "__main__":
    verify_granular_styles()
