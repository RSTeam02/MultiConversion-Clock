class ConvertStrategy {
    //pass strategy arg
    constructor(strategy) {
        this.strategy = strategy;
    }

    convert(seq) {
        return this.strategy.convert(seq);
    }
}