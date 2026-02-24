from playwright.sync_api import sync_playwright, expect

def verify_zindex_controls():
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

        # 4. Change layout to 'freeform' to expose geometry controls
        layout_select = services_section.locator("select").first
        layout_select.select_option("freeform")

        # 5. Check for Z-Index controls in the first item card
        item_card = services_section.locator(".item-card").first

        # Expect to find "Z" label
        expect(item_card.get_by_text("Z", exact=True)).to_be_visible()

        # Expect buttons for Front/Back
        expect(item_card.get_by_role("button", name="▲")).to_be_visible()
        expect(item_card.get_by_role("button", name="▼")).to_be_visible()

        print("Verification passed: Z-Index controls are visible in freeform mode.")

        # 6. Take screenshot
        page.screenshot(path="verification/zindex_controls.png")

        browser.close()

if __name__ == "__main__":
    verify_zindex_controls()
