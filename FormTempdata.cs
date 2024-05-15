
// In your controller action:
[HttpPost]
public IActionResult SubmitForm(RegisterViewModel model)
{
    if (ModelState.IsValid)
    {
        // Save validated data (e.g., model.Email, model.Password) to TempData
        TempData["Email"] = model.Email;
        // Other processing...
        return RedirectToAction("Success");
    }
    // Handle validation errors
    return View(model);
}
