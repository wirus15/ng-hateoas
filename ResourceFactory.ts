module hateoas {
    'use strict';

    export class ResourceFactory {
        constructor(private client: Client) {
        }

        create(data: any) {
            return new Resource(this.client);
        }
    }
}