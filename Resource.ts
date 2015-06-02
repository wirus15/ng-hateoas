module hateoas {
    'use strict';

    export class Resource {

        constructor(private client: Client) {
        }

        $get(url: string, options?: Object): Resource {
            return this.client.get(url, options);
        }

        $post(url: string, data?: Object, options?: Object): Resource|void {
            return this.client.post(url, data, options);
        }

        $put(url: string, data?: Object, options?: Object): Resource|void {
            return this.client.put(url, data, options);
        }

        $patch(url: string, data?: Object, options?: Object): Resource|void {
            return this.client.patch(url, data, options);
        }

        $del(url: string, options?: Object): void {
            return this.client.del(url, options);
        }
    }
}