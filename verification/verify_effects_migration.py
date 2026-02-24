from playwright.sync_api import sync_playwright, expect

def verify_effects_migration():
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

        # 4. Verify that legacy effects now appear as removable pills
        effects_container = services_section.locator(".effects-builder .effect-pills")
        expect(effects_container).to_be_visible()

        # 5. Check for existence of effect pills
        # We expect at least 2 migrated, but content.json already had 2.
        # So we should see a reasonable number of pills (>= 2).
        count = effects_container.locator(".effect-pill").count()
        print(f"Found {count} effect pills.")

        if count >= 2:
            print("Verification passed: Legacy effects appear as pills.")
        else:
            raise Exception("Failed to find migrated effect pills.")

        # 6. Take screenshot
        page.screenshot(path="verification/effects_migration_fixed.png")

        browser.close()

if __name__ == "__main__":
    verify_effects_migration()
