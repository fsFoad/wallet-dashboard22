import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-loading',
  standalone: true,
  template: `
    <div class="ds-loading" [class.ds-loading--overlay]="overlay()" role="status" aria-live="polite">
      <span class="ds-loading__spinner" aria-hidden="true"></span>
    </div>
  `,
  styles: `
    .ds-loading {
      display: grid;
      place-items: center;
      padding: 2rem;
    }

    .ds-loading--overlay {
      position: fixed;
      inset: 0;
      background: rgb(15 23 42 / 0.2);
      z-index: 1000;
    }

    .ds-loading__spinner {
      width: 2rem;
      height: 2rem;
      border: 3px solid #e2e8f0;
      border-top-color: #138c89;
      border-radius: 50%;
      animation: ds-spin 0.8s linear infinite;
    }

    @keyframes ds-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `,
})
export class DsLoadingComponent {
  readonly overlay = input<boolean>(false);
}
