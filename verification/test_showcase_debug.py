from playwright.sync_api import sync_playwright, expect
import time

def verify_showcase():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Listen for console logs
        page.on("console", lambda msg: print(f"Console: {msg.text}"))
        page.on("pageerror", lambda err: print(f"PageError: {err}"))

        # Navigate to editor
        page.goto("http://localhost:5500/showcase/editor.html")

        # Check iframe content
        iframe = page.frame_locator("#previewFrame")

        # Ensure it is not black/empty by checking for a known element
        # If content.json loaded, we expect section#inicio
        try:
            expect(iframe.locator("section#inicio")).to_be_visible(timeout=5000)
            print("Verification passed: Editor loads and Preview content is visible.")
        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/failed_state.png")

        browser.close()

if __name__ == "__main__":
    verify_showcase()
