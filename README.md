# Angular - Material Design Icons

Angular 6 component.

```html
<icon [path]="mdiAccount"></icon>
```

```ts
import { Component } from '@angular/core';
import { mdiAccount } from '@mdi/js'

@Component({
  selector: 'app',
  templateUrl: `./app.html`
})
export class AppComponent {
  mdiAccount: string = mdiAccount;
}
```

## Development

- `npm install`
- `npm run build`