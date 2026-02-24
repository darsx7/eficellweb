from playwright.sync_api import sync_playwright, expect

def verify_theme_controls():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Navigate to the editor
        # Ensure the server is running on port 5500 (standard for python http.server in this env)
        page.goto("http://localhost:5500/showcase/editor.html")

        # 2. Wait for the iframe and content to load
        iframe = page.frame_locator("#previewFrame")
        expect(iframe.locator("section#inicio")).to_be_visible(timeout=5000)

        # 3. Verify the floating controls are present in the iframe body
        # The controls are appended to document.body inside the iframe
        controls_panel = iframe.locator(".theme-controls")
        expect(controls_panel).to_be_visible()

        # 4. Verify specific buttons exist (e.g., Solar, Ocean)
        # They are created based on TEMPLATES keys
        solar_btn = controls_panel.locator("button[title='Energético y radiante']") # Description for Solar
        expect(solar_btn).to_be_visible()

        ocean_btn = controls_panel.locator("button[title='Espacioso y fluido']") # Description for Ocean
        expect(ocean_btn).to_be_visible()

        print("Verification passed: Theme controls are visible and populated.")

        # 5. Take a screenshot of the controls
        # We'll take a screenshot of the bottom right corner where controls are
        page.screenshot(path="verification/theme_controls.png")

        browser.close()

if __name__ == "__main__":
    verify_theme_controls()
