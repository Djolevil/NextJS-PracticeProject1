import { useRouter } from 'next/router';

// domain.com/news/something-important

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;

    return <h1>The Detil Page</h1>
};

export default DetailPage;