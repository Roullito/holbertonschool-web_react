declare const majorBrand: unique symbol;
declare const minorBrand: unique symbol;

interface MajorCredits {
    credits: number;
    [majorBrand]: true;
}

interface MinorCredits {
    credits: number;
    [minorBrand]: true;
}

function sumMajorCredits(
    subject1: MajorCredits,
    subject2: MajorCredits
): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        [majorBrand]: true,
    };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    [minorBrand]: true,
  };
}
