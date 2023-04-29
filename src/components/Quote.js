import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=age',
          {
            headers: {
              'X-Api-Key': 'a0ycFdxNM4LkjWhXVJcxlA==PoHDacECFrf3uS8H',
            },
          },
        );
        const data = await res.json();
        setQuote([data[0].quote, data[0].author]);
        setLoading(false);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (isloading) return <div className="wait"> Wait a moment....</div>;
  if (hasError) return <div>Oups something wrong!!</div>;

  return (
    <div>
      <div className="qtitle">Quote of the day</div>
      <p>
        &quot;
        {quote[0]}
        &quot;
      </p>
      <p className="auth">
        -
        {quote[1]}
      </p>
    </div>
  );
};

export default Quote;
