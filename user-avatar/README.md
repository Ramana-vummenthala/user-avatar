🧑‍🎨 user-avatar-rv


A lightweight, customizable Angular Web Component for displaying user avatars with initials fallback. Easily embed it in any Angular, React, Vue, or plain HTML app.

✨ Features


💡 Shows initials when no image is available.

📐 Supports multiple sizes: small, medium, large.

🔲 Circular or square shape.

⚡ Built as a standalone Angular Element (Web Component).

🔌 Easy to plug into any frontend framework.

📦 Installation

`npm i user-avatar-rv`


🛠️ Usage in Angular


Add the script to angular.json:

"scripts": [
"node_modules/user-avatar-rv/user-avatar.js"
]
Or you can include it via CDN if you publish it to jsDelivr or similar.

Use the custom element in your template:

`<user-avatar
  firstName="Jane"
  lastName="Doe"
  imageUrl=""
  size="large"
  shape="circle">
</user-avatar>`


🧩 Inputs


| Input       | Type                        | Default   | Description                          |
|-------------|-----------------------------|-----------|--------------------------------------|
| `firstName` | `string`                    | `''`      | First name of the user               |
| `lastName`  | `string`                    | `''`      | Last name of the user                |
| `imageUrl`  | `string`                    | `''`      | Optional avatar image URL            |
| `size`      | `'small' | 'medium' | 'large'` | `'medium'` | Size of the avatar                   |
| `shape`     | `'circle' | 'square'`       | `'circle'`| Shape of the avatar (circle/square)  |
