import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'progress-bar-accessibility-doc',
    standalone: false,
    template: ` <div>
        <app-docsectiontext>
            <h3>Screen Reader</h3>
            <p>
                ProgressBar components uses <i>progressbar</i> role along with <i>aria-valuemin</i>, <i>aria-valuemax</i> and <i>aria-valuenow</i> attributes. Value to describe the component can be defined using<i>aria-labelledby</i> and
                <i>aria-label</i> props.
            </p>
        </app-docsectiontext>

        <app-code [code]="code" [hideToggleCode]="true"></app-code>

        <h3>Keyboard Support</h3>
        <p>Not applicable.</p>
    </div>`
})
export class AccessibilityDoc {
    code: Code = {
        html: `<span id="label_status">Status</span>
<p-progressbar aria-labelledby="label_status" />

<p-progressbar aria-label="Status" />`
    };
}
