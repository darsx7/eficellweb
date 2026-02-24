from playwright.sync_api import sync_playwright, expect
import time

def verify_showcase():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to editor
        page.goto("http://localhost:5500/showcase/editor.html")
        time.sleep(2)  # Wait for load

        # Check iframe content
        iframe = page.frame_locator("#previewFrame")

        # Ensure it is not black/empty by checking for a known element
        # If content.json loaded, we expect section#inicio
        expect(iframe.locator("section#inicio")).to_be_visible(timeout=5000)

        print("Verification passed: Editor loads and Preview content is visible.")
        browser.close()

if __name__ == "__main__":
    verify_showcase()
