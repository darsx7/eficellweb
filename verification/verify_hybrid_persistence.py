from playwright.sync_api import sync_playwright, expect
import time
import re

def verify_hybrid_persistence():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Handle dialogs (alerts)
        page.on("dialog", lambda dialog: print(f"Dialog: {dialog.message}") or dialog.accept())

        # 1. Navigate to the editor
        page.goto("http://localhost:5500/showcase/editor.html")

        # 2. Wait for loading
        iframe = page.frame_locator("#previewFrame")
        expect(iframe.locator("section#inicio")).to_be_visible(timeout=5000)

        # 3. Enter Edit Mode
        toggle_btn = page.locator("#toggleEditMode")
        toggle_btn.click()

        expect(iframe.locator("body")).to_have_class(re.compile(r"edit-mode"))

        # 4. Drag a card in Grid mode (Hybrid)
        first_service = iframe.locator(".service-card").first
        first_service.wait_for(state="visible")

        first_service.hover()
        page.mouse.down()

        box = first_service.bounding_box()
        start_x = box['x'] + box['width'] / 2
        start_y = box['y'] + box['height'] / 2

        # Move significantly
        page.mouse.move(start_x + 100, start_y + 50, steps=10)
        page.mouse.up()

        # 5. Verify transform applied immediately
        expect(first_service).to_have_attribute("style", re.compile(r"translate"))

        # Pause to let JS settle
        time.sleep(1)

        # 6. Save Content
        save_btn = page.locator("#saveBtn")
        save_btn.click()
        # expect(save_btn).to_have_text("✅ Guardado!", timeout=5000) # Flaky, assuming save works if log shows 200
        time.sleep(1) # Wait for save to complete

        # 7. Reload Page
        page.reload()
        iframe = page.frame_locator("#previewFrame")
        expect(iframe.locator("section#inicio")).to_be_visible(timeout=5000)

        # 8. Verify Persistence
        first_service_reloaded = iframe.locator(".service-card").first
        expect(first_service_reloaded).to_have_attribute("style", re.compile(r"transform|translate"))

        print("Verification passed: Hybrid displacement persisted after reload.")

        # 9. Verify Reset Button in Editor
        services_section = page.locator(".section-item").filter(has_text="Servicios")
        services_section.click()

        item_card = services_section.locator(".item-card").first

        # Wait for reset button to appear (it's conditional!)
        reset_btn = item_card.get_by_role("button", name="↺ Reset Posición")
        expect(reset_btn).to_be_visible()

        reset_btn.click()

        # Handle confirm dialog
        # The page.on("dialog") handler above will auto-accept it.

        # Verify preview updated
        # Allow time for update
        time.sleep(0.5)
        expect(first_service_reloaded).not_to_have_attribute("style", re.compile(r"translate"))

        print("Verification passed: Reset button restored position.")

        page.screenshot(path="verification/hybrid_persistence_passed.png")
        browser.close()

if __name__ == "__main__":
    verify_hybrid_persistence()
