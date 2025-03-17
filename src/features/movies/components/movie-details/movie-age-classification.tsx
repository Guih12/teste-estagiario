import { Typography } from "@/components/ui/typography";
import { useGetMovieReleaseDatesQuery } from "../../hooks/react-query/queries/use-get-movie-release-dates-query copy";

interface Props {
  movieId: number;
}

export function MovieAgeClassification({ movieId }: Props) {
  const { data: releaseDates } = useGetMovieReleaseDatesQuery({ movieId });

  const getCertificationByCountry = (country: string) => {
    return releaseDates.results
      .find((releaseDate) => releaseDate.iso_3166_1 === country)
      ?.release_dates.find((release) => release.certification !== "")
      ?.certification;
  };

  const brazillianClassificationColors = {
    L: "bg-green-500",
    "10": "bg-blue-500",
    "12": "bg-yellow-500",
    "14": "bg-orange-500",
    "16": "bg-red-600",
    "18": "bg-black text-white",
  };

  const americanClassificationColors = {
    G: "bg-green-500",
    PG: "bg-blue-500",
    "PG-13": "bg-yellow-500",
    R: "bg-orange-500",
    "NC-17": "bg-red-600",
  };

  const brazillianCertification = getCertificationByCountry("BR");
  const certification =brazillianCertification || getCertificationByCountry("US");
  const classificationColors = brazillianCertification
    ? brazillianClassificationColors[certification as keyof typeof brazillianClassificationColors]
    : americanClassificationColors[certification as keyof typeof americanClassificationColors];

  if (!certification) {
    return null;
  }

  return (
    <Typography
      variant="smallText"
      className={`flex aspect-square h-8 w-8 items-center justify-center rounded border p-2 ${classificationColors || "bg-gray-500"}`}
    >
      {certification || "?"}
    </Typography>
  );
}
