import { BACKGROUND_URL } from "../constans";

const getGQL = function(url) {
    return async function(query, variables) {
        try {
            const result = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query, variables }),
            });
            return result.json();
        } catch (error) {
            return new Error(error.message);
        };
    };
};

const GQL = getGQL(BACKGROUND_URL + "/graphql");

export default GQL;