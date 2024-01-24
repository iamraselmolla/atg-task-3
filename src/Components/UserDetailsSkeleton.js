import React from 'react';
import Skeleton from 'react-loading-skeleton';

const UserDetailsSkeleton = () => {
    return (
        <div className="skeleton-div">
            <Skeleton style={{width: '128px', height: '128px'}} className="rounded-circle"></Skeleton>
            <Skeleton style={{height: '30px'}}></Skeleton>
            <Skeleton className='mt-2' style={{height: '100px'}}></Skeleton>
            <Skeleton className='mt-2' style={{height: '40px'}}></Skeleton>
            <Skeleton className='mt-2' style={{height: '40px'}}></Skeleton>
            <Skeleton className='mt-2' style={{height: '40px'}}></Skeleton>
        </div>
    );
};

export default UserDetailsSkeleton;