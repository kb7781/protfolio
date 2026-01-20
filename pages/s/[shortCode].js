import { useEffect } from 'react';
import { useRouter } from 'next/router';
import mongoose from 'mongoose';
import ShortUrl from '../../models/ShortUrl';

const MONGODB_URI = process.env.MONGODB_URI;

export async function getServerSideProps({ params }) {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const shortUrl = await ShortUrl.findOne({ shortCode: params.shortCode });

    if (!shortUrl) {
      return {
        notFound: true,
      };
    }

    return {
      redirect: {
        destination: shortUrl.originalUrl,
        permanent: false,
      },
    };
  } catch (error) {
    console.error('Error fetching URL:', error);
    return {
      notFound: true,
    };
  }
}

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isFallback) {
      return;
    }
  }, [router.isFallback]);

  return null;
};

export default RedirectPage;