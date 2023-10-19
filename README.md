# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

## Git tag version the simpler steps:
  - adding changes to src
  - ```terminal```: git add .
  - ```terminal```: git commit -m "{a message follows conventional}"
  - ```terminal```: npm version patch|minor|major [OPTIONAL: '-m "tag release message" ' - this message will replace default x.x.x]
  - ```terminal```: git push --follow-tags 

## Other usefull git commands:
  - gitk: show gpu
  - git log --pretty="%s" (The “%s” corresponds to the commit title itself. You can modify the string to style your commit as you like. E.g: "- %s")
  - If you want to go further, and save your changelog faster: instead of copying and pasting the result into a file, redirect it to your terminal by typing “git log --pretty="- %s" > CHANGELOG.md”
