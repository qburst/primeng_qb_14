import { Code } from '@/domain/code';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'paginator-template-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>
                Paginator UI is customized using the <i>paginatorleft</i> and <i>paginatorright</i> property. Each element can also be customized further with your own UI to replace the default one, refer to the
                <a href="#" [routerLink]="['/paginator']">Paginator</a> component for more information about the advanced customization options.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p-deferred-demo (load)="loadDemoData()">
                <p-treetable [value]="files" [columns]="cols" [paginator]="true" [rows]="10" [scrollable]="true" [tableStyle]="{ 'min-width': '50rem' }">
                    <ng-template #header let-columns>
                        <tr>
                            <th *ngFor="let col of columns">
                                {{ col.header }}
                            </th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
                        <tr [ttRow]="rowNode">
                            <td *ngFor="let col of columns; let i = index">
                                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                                {{ rowData[col.field] }}
                            </td>
                        </tr>
                    </ng-template>
                    <ng-template #paginatorleft>
                        <p-button icon="pi pi-refresh" text />
                    </ng-template>

                    <ng-template #paginatorright>
                        <p-button icon="pi pi-download" text />
                    </ng-template>
                </p-treetable>
            </p-deferred-demo>
        </div>
        <app-code [code]="code" selector="tree-table-paginator-template-demo"></app-code>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorTemplateDoc {
    files!: TreeNode[];

    cols!: Column[];

    loadDemoData() {
        this.files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            this.files.push(node);
        }

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }

    code: Code = {
        basic: `<p-treetable [value]="files" [columns]="cols" [paginator]="true" [rows]="10" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
        <tr [ttRow]="rowNode">
            <td *ngFor="let col of columns; let i = index">
                <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
    <ng-template #paginatorleft>
        <p-button icon="pi pi-refresh" text />
    </ng-template>
    <ng-template #paginatorright>
        <p-button icon="pi pi-download" text />
    </ng-template>
</p-treetable>`,

        html: `<div class="card">
    <p-treetable [value]="files" [columns]="cols" [paginator]="true" [rows]="10" [scrollable]="true" [tableStyle]="{'min-width':'50rem'}">
        <ng-template #header let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template #body let-rowNode let-rowData="rowData" let-columns="columns">
            <tr [ttRow]="rowNode">
                <td *ngFor="let col of columns; let i = index">
                    <p-treetable-toggler [rowNode]="rowNode" *ngIf="i === 0" />
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
        <ng-template #paginatorleft>
            <p-button icon="pi pi-refresh" text />
        </ng-template>
        <ng-template #paginatorright>
            <p-button icon="pi pi-download" text />
        </ng-template>
    </p-treetable>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'tree-table-paginator-template-demo',
    templateUrl: './tree-table-paginator-template-demo.html',
    standalone: true,
    imports: [TreeTableModule, ButtonModule, CommonModule]
})
export class TreeTablePaginatorTemplateDemo implements OnInit {
    files!: TreeNode[];

    cols: Column[];

    ngOnInit() {
        this.files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            this.files.push(node);
        }

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}`
    };
}
