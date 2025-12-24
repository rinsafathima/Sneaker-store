import ReviewCard from "./ReviewCard";

const reviewsData = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling_176420-15741.jpg?w=1380&t=st=1707571635~exp=1707572235~hmac=324e9edb97739a51280702907b55aaeba8b3f57928c9d9e732475cbaf781b103",
        name: "Justin",
        country: "Germany",
        description: "Love the sneakers, well made fit perfect. Customer service is awesome oh so helpful and friendly.",
        rating: 5
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=1380&t=st=1707571683~exp=1707572283~hmac=cf5b12852992dee6277215569f702f7ac3ec858d7e2a35c43506846a101f0aaf",
        name: "Anna",
        country: "Poland",
        description: "Brilliant, whimsical designs, great shoes, amicable and prompt customer service. I love everything about Sneaker Store. They never disappoint. ",
        rating: 4
    },
    {
        id: 3,
        image: "https://img.freepik.com/free-photo/portrait-father-his-backyard_23-2149489567.jpg?w=740&t=st=1707571723~exp=1707572323~hmac=3331b3d177895e3ad35f2b7c6dd5e92ed6946d9864ef5e712b5d8a5579bfd86e",
        name: "John",
        country: "USA",
        description: "Fast shipping, excellent patterns, quality materials. I own several pair of Hot Chocolate sneakers and love each one. All comfy to wear and they just make an outfit!",
        rating: 4
    },
    {
        id: 4,
        image: "https://img.freepik.com/free-photo/woman-with-blond-short-hair-tanned-smiling-cute-gazing-camera-with-friendly_176420-44610.jpg?w=1380&t=st=1707571747~exp=1707572347~hmac=58796cc62df5539f9fc85dd7002b1efc0745d5c2601085f4c65a002cdc8e7f6b",
        name: "Emma",
        country: "Canada",
        description: "Sneaker Store is both classy and easy going shoe shopping. Just what I want!",
        rating: 5
    }
];

const Reviews = () => {
    return (
        <div className="flex flex-col flex-wrap items-center justify-around mx-auto w-full bg-zinc-200 gap-6 py-[10vh] ">
           
            <div className="flex gap-6 flex-wrap items-center justify-around" data-aos='fade-up'> {reviewsData.map(review => (
                <ReviewCard
                    key={review.id}
                    image={review.image}
                    name={review.name}
                    country={review.country}
                    description={review.description}
                    rating={review.rating}
                />
            ))}</div>
           
        </div>
    );
};

export default Reviews;
