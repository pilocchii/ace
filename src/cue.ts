import log from "electron-log";

export interface Cue {
    tick: number
    tickLength: number
    pitch: number
    velocity: number
    gridOffset: GridOffset
    handType: number
    behavior: number
}

export interface GridOffset {
    x: number
    y: number
}

interface OptionalCue {
    tick?: number;
    tickLength?: number;
    pitch?: number;
    velocity?: number;
    gridOffset?: GridOffset;
    handType?: number;
    behavior?: number;
}

export class Cue implements Cue {
    constructor(
        // tick: number,
        // tickLength: number,
        // pitch: number,
        // velocity: number,
        // gridOffset: GridOffset,
        // handType: number,
        // behavior: number
        options: OptionalCue
    ) {
        this.tick = options.tick;
        this.tickLength = options.tickLength;
        this.pitch = options.pitch;
        this.velocity = options.velocity;
        this.gridOffset = options.gridOffset;
        this.handType = options.handType;
        this.behavior = options.behavior;
    }
}

/*
A factory for building Cue objects with chaining
*/
export class CueFactory {
    options: OptionalCue;

    constructor(options: OptionalCue = {}) {
        this.options = options;
    }

    tick(tick: number): CueFactory {
        return new CueFactory({
            ...this.options,
            tick,
        })
    }

    tickLength(tickLength: number): CueFactory {
        return new CueFactory({
            ...this.options,
            tickLength,
        })    
    }

    pitch(pitch: number): CueFactory {
        return new CueFactory({
            ...this.options,
            pitch,
        }) 
    }

    velocity(velocity: number): CueFactory {
        return new CueFactory({
            ...this.options,
            velocity,
        }) 
    }

    gridOffset(gridOffset: GridOffset): CueFactory {
        return new CueFactory({
            ...this.options,
            gridOffset,
        }) 
    }

    handType(handType: number): CueFactory {
        return new CueFactory({
            ...this.options,
            handType,
        }) 
    }

    behavior(behavior: number): CueFactory {
        return new CueFactory({
            ...this.options,
            behavior,
        }) 
    }

    build() {
        return new Cue({
            ...this.options
        })
    }

}