export class Painting {

    constructor(id, name, artist, price) {

        this.id = id;

        this.name = name;

        this.artist = artist;

        this.price = price;

        this.available = true;

    }

}


// ==========================================
// PROTOTYPE
// ==========================================

Painting.prototype.getDetails =
    function () {

        return `${this.name} - ${this.artist}`;

    };


// ==========================================
// ITERATOR
// ==========================================

export function paintingIterator() {

    let index = 0;

    return {

        next() {

            if (index < 3) {

                index++;

                return {

                    value:
                        "Painting " + index,

                    done: false

                };

            }

            return {

                value: undefined,

                done: true

            };

        }

    };

}


// ==========================================
// GENERATOR
// ==========================================

export function* paintingGenerator() {

    yield "🎨 Water Color";

    yield "🖼️ Oil Painting";

    yield "🌄 Landscape Painting";

}