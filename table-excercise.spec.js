const { test, expect } = require('@playwright/test');

test('Verify rowspan and colspan for table', async ({ page }) => {
  // Navigate to the page with the table
  await page.goto('file:///D:/html-files/HTML-programs-excercise/table-excercise3.html');

  // Check rowspan for "Monday"
  const mondayRowspan = await page.getAttribute('td:has-text("Monday")', 'rowspan');
  expect(mondayRowspan).toBe('2'); // Expected rowspan value for "Monday"

  // Check colspan for "Seminar" header
  const seminarColspan = await page.getAttribute('th:has-text("Seminar")', 'colspan');
  expect(seminarColspan).toBe('3'); // Expected colspan value for "Seminar"

  // Check the rowspan for "Tuesday"
  const tuesdayRowspan = await page.getAttribute('td:has-text("Tuesday")', 'rowspan');
  expect(tuesdayRowspan).toBe('3'); // No rowspan expected for "Tuesday"

  // Check the colspan for "Schedule"
  const scheduleColspan = await page.getAttribute('th:has-text("Schedule")', 'colspan');
  expect(scheduleColspan).toBe('2'); // Expected colspan for "Schedule"

});