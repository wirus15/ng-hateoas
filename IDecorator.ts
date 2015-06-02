module hateoas {
    'use strict';

    export interface IDecorator {
        decorate(resource: Resource): void;
    }
}