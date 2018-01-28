class Transcriptor {
    toRna(dnaSequence: string ) {
        var rnaSequence: string = ""
        
        for(var index = 0; index < dnaSequence.length; index++) {
            var nucleotide = this.transcriptNucleotide(dnaSequence.charAt(index))
            rnaSequence = `${rnaSequence}${nucleotide}`
        }

        return rnaSequence
    }

    private transcriptNucleotide(dnaSequence: string) {
        switch (dnaSequence) {
            case "C": {
                return "G";
            }
            case "G": {
                return "C";
            }
            case "A": {
                return "U";
            }
            case "T": {
                return "A";
            }
            default: {
                throw new Error("Invalid input DNA.");
            }
        }
    }
}

export default Transcriptor