# Manual Tests
## Form Page
### Test it should not let you submit a deck without entering a username
- Expected: For the submit button to be disabled if no username is entered.
- Actual: The submit button is disabled.

### Test it should not let you submit a deck without a deck name
- Expected: For the submit button to be disabled if no deck name is entered.
- Actual: The submit button is disabled.

### Test it should not let you submit a deck without selecting an arena
- Expected: For the submit button to be disabled if no arena is selected.
- Actual: The submit button is disabled.

### Test it should not let you submit a deck if you have chosen 7 or less cards
- Expected: For a popup to show upon pressing submit specifying that less than 8 cards are selected and exactly 8 cards must be selected.
- Actual: A popup shows specifying that less than 8 cards are selected and exactly 8 cards must be selected. The user is then returned to the form.

### Test it should not let you select more than 8 cards
- Expected: For a popup to show upon selecting a ninth card specifying that you can only select 8 cards and that you should deselect another one first if you wish to change a choice.
- Actual: A popup shows upon selecting a ninth card specifying that you can only select 8 cards and that you should deselect another one first if you wish to change a choice.

### Test it should successfully submit the deck with all fields completed
- Expected: For the submit button to be enabled and for a success message to show upon clicking it, thanking the user and explaining it will be published after review.
- Actual: The submit button is enabled and a popup success message shows upon clicking it, thanking the user and explaining it will be published after review.

### Test it should successfully submit the deck with the description field empty
- Expected: For the submit button to be enabled and for a success message to show upon clicking it, thanking the user and explaining it will be published after review.
- Actual: The submit button is enabled and a popup success message shows upon clicking it, thanking the user and explaining it will be published after review.