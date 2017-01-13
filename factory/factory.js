class Factory {

    execConvert(mode) {
        switch (mode) {
            case "bin":
                return new BinaryConverter();
            case "rom":
                return new RomanConverter();
            default:
                return null;
        }
    }
}