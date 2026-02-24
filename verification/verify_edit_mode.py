from playwright.sync_api import sync_playwright, expect
import re

def verify_edit_mode_and_resize():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Navigate to the editor
        page.goto("http://localhost:5500/showcase/editor.html")

        # 2. Wait for loading
        iframe = page.frame_locator("#previewFrame")
        expect(iframe.locator("section#inicio")).to_be_visible(timeout=5000)

        # 3. Toggle Edit Mode
        toggle_btn = page.locator("#toggleEditMode")
        expect(toggle_btn).to_have_text("👁️ Vista Previa")
        toggle_btn.click()
        expect(toggle_btn).to_have_text("✏️ Editando")

        # 4. Verify Effects are Disabled
        # Check classes individually with regex allowing other classes
        body_locator = iframe.locator("body")
        expect(body_locator).to_have_class(re.compile(r"edit-mode"))
        expect(body_locator).to_have_class(re.compile(r"no-animations"))

        # 5. Verify Resize Handle appears on interaction
        first_service = iframe.locator(".service-card").first

        # Trigger mousedown
        first_service.dispatch_event("mousedown")

        # Check for handle
        handle = first_service.locator(".resize-handle")
        expect(handle).to_be_visible()

        print("Verification passed: Edit Mode toggles and handles appear.")

        # 6. Take screenshot
        page.screenshot(path="verification/edit_mode_resize_fixed.png")

        browser.close()

if __name__ == "__main__":
    verify_edit_mode_and_resize()
