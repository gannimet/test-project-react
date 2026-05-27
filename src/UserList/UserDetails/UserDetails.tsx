import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { User } from '../User';

function UserDetails() {
    const { userId } = useParams<{ userId: string }>();
    const [userData, setUserData] = useState<User | undefined>();

    useEffect(() => {
        if (userId == null) {
            return;
        }

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => response.json())
            .then(setUserData);
    }, [userId]);

    if (!userData) {
        return <div>Loading …</div>;
    }

    const lat = parseInt(userData.address.geo.lat, 10);
    const lng = parseInt(userData.address.geo.lng, 10);
    const bboxLngMin = lng - 0.01;
    const bboxLngMax = lng + 0.01;
    const bboxLatMin = lat - 0.01;
    const bboxLatMax = lat + 0.01;
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bboxLngMin},${bboxLatMin},${bboxLngMax},${bboxLatMax}&marker=${lat},${lng}`;

    return (
        <>
            <h2>{userData.name}</h2>
            <div>
                <a href={`https://${userData.website}`}>{userData.website}</a>
                &nbsp;|&nbsp;
                <a href={`mailto:${userData.email}`}>{userData.email}</a>
            </div>
            <iframe width="400" height="300" src={mapUrl}></iframe>
        </>
    );
}

export default UserDetails;
