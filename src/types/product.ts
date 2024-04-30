export type Product = {
	image: string;
	title: string;
	price: number;
};

export type Cake = {
	id: string;
	title: string;
	slug: string;
	content: string;
	price: string;
	typeOfCake: TypeOfCake[];
	coverImage: string | undefined;
	meshUrl: string;
};

export type TypeOfCake = {
	label: string;
	value: string;
};
