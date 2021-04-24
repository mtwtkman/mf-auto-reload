function findButtons() {
  return document.querySelectorAll('input[value="更新"][name="commit"]');
}

function click(button) {
  button.click();
}

function main() {
  const buttons = findButtons();
  buttons.forEach(click);
}

main()
