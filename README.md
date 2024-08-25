# React Icon Registry

`React Icon Registry` is a TypeScript package designed to manage and utilize icons in a React application. It provides a flexible and type-safe way to register, retrieve, and display icons.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Creating an Instance](#creating-an-instance)
  - [Registering Icons](#registering-icons)
  - [Retrieving Icons](#retrieving-icons)
  - [Displaying Icons](#displaying-icons)
  - [Getting All Registered Keys](#getting-all-registered-keys)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install `React Icon Registry` via npm or yarn:

```sh
npm install icon-builder
```
or

```sh
yarn add icon-builder
```

## Usage
### Creating an Instance
First, create an instance of the IconBuilder class:

```
import { IconBuilder } from 'icon-builder';

const builder = new IconBuilder();

```
## Registering Icons
Register your icons with a name and URL or path to the component:

```
const builder = new IconBuilder()
    .register({ name: 'logo192', component: '/logo192.png' })
    .register({ name: 'logo191', component: '/logo191.png' });
```
## Retrieving Icons
Retrieve an icon component using its name:
```
const logo192 = builder.getIcon('logo192'); // '/logo192.png'

```
## Displaying Icons
To display an icon in a React component:

```
const MyComponent = () => (
    <div>
        {builder.getImage('logo192', 'Logo 192')}
    </div>
);
```
## Getting All Registered Keys
Get a list of all registered icon names:

```
const keys = builder.getKeys(); // ['logo192', 'logo191']

```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the existing style and includes tests where applicable.

## License
This project is licensed under the MIT License. See the LICENSE file for details.