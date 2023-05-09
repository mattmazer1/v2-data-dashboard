import Card from "@/components/card";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

interface CardData {
	data: {
		ip: string;
		time: string;
		date: string;
	};
}
interface CardDataArray {
	items: CardData[];
}

const queryClient = new QueryClient();

function CreateCards(): JSX.Element {
	const { data, isLoading, isError } = useQuery<CardDataArray>(
		"cardData",
		async () => {
			const response = await fetch(process.env.NEXT_PUBLIC_GET_DATA as string);

			if (!response.ok) {
				throw new Error("network response was not ok");
			}
			return response.json();
		}
	);
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<div>
			{data &&
				data.items.map((cardData, index: number) => (
					<Card
						key={index}
						ip={cardData?.data?.ip}
						time={cardData?.data?.time}
						date={cardData?.data?.date}
					/>
				))}
		</div>
	);
}

export default function Home() {
	return (
		<QueryClientProvider client={queryClient}>
			<CreateCards />
		</QueryClientProvider>
	);
}
