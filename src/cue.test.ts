import { CueFactory } from "./cue";
import { expect } from 'chai';
import { AssertionError } from "assert";

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
})