import { CueFactory, Cue } from "./cue";
import { expect } from 'chai';

describe('Cues', () => {

    describe('CueFactory', () => {
        
        it('should create a new Cue', () => {
            let cue = new CueFactory()
            .tick(100)
            .tickLength(100)
            .pitch(100)
            .velocity(100)
            .gridOffset({x:100, y:100})
            .handType(100)
            .behavior(100)
            .build();

            expect(cue.tick).to.equal(100);
        });

        it('should throw a validation error', () => {
            let factory = new CueFactory();
            expect(factory.build).to.throw()
        });
    });

    describe('Cue', () => {
        it('should serialize into a human readable string', () => {
            let cue = new CueFactory()
            .tick(100)
            .tickLength(100)
            .pitch(100)
            .velocity(100)
            .gridOffset({x:100, y:100})
            .handType(100)
            .behavior(100)
            .build();

            // odd spacing because of string templates
            let stringVal =  `{
    "tick": 100,
    "tickLength": 100,
    "pitch": 100,
    "velocity": 100,
    "gridOffset": {
        "x": 100,
        "y": 100
    },
    "handType": 100,
    "behavior": 100
}`
            let serializedCue = cue.serialize();

            expect(serializedCue).to.equal(stringVal);
        })

        it('should deserialize into a Cue object', () => {
            let targetCue = new CueFactory()
            .tick(100)
            .tickLength(100)
            .pitch(100)
            .velocity(100)
            .gridOffset({x:100, y:100})
            .handType(100)
            .behavior(100)
            .build();

            // odd spacing because of string templates
            let stringVal =  `{
                "tick": 100,
                "tickLength": 100,
                "pitch": 100,
                "velocity": 100,
                "gridOffset": {
                    "x": 100,
                    "y": 100
                },
                "handType": 100,
                "behavior": 100
            }`
            let cue = Cue.from(stringVal);

            // a Cue.equals() might be an idea, but not sure what it would be used for outside of testing
            expect(cue.tick).to.equal(targetCue.tick);
            expect(cue.tickLength).to.equal(targetCue.tickLength);
            expect(cue.pitch).to.equal(targetCue.pitch);
            expect(cue.velocity).to.equal(targetCue.velocity);
            expect(cue.gridOffset.x).to.equal(targetCue.gridOffset.x);
            expect(cue.gridOffset.y).to.equal(targetCue.gridOffset.y);
            expect(cue.handType).to.equal(targetCue.handType);
            expect(cue.behavior).to.equal(targetCue.behavior);
        })
    })
})