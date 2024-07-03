import React, { useState, useEffect } from 'react';
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import './Testimonial.css'
const REVIEWS = [
    {
        id: 6,
        name: 'Alice',
        role: 'Data Scientist',
        avatar: 'https://i.pravatar.cc/150?img=23',
        review: `Absolutely mind-blowing! From graphics to gameplay, it's a virtual masterpiece. I lost track of time in the immersive experience.`,
    },
    {
        id: 0,
        name: 'Bob',
        role: 'Architect',
        avatar: 'https://i.pravatar.cc/150?img=13',
        review: `A hidden gem for tech enthusiasts. The selection is vast, and the ease of discovering new tech is addictively delightful!`,
    },
    {
        id: 2,
        name: 'Charlie',
        role: 'DevOps Engineer',
        avatar: 'https://i.pravatar.cc/150?img=8',
        review: `Results speak louder than words. I've never seen progress like this. The workflows are challenging but oh-so-rewarding. Kudos!`,
    },
    {
        id: 3,
        name: 'Diana',
        role: 'Product Manager',
        avatar: 'https://i.pravatar.cc/150?img=41',
        review: `It's very easy to customize and categorize lists for new projects/task categories.`,
    },
    {
        id: 13,
        name: 'Ethan',
        role: 'Software Engineer',
        avatar: 'https://i.pravatar.cc/150?img=57',
        review: `An adventure for the curious mind. Every click led to a new discovery. It's like a digital journey through the wonders of the internet.`,
    },
    {
        id: 4,
        name: 'Fiona',
        role: 'Marketing Specialist',
        avatar: 'https://i.pravatar.cc/150?img=42',
        review: `Plan, create, and explore seamlessly. This service made my creative dreams a reality. Smooth navigation, and the recommendations were spot on.`,
    },
    {
        id: 10,
        name: 'George',
        role: 'Software Developer',
        avatar: 'https://i.pravatar.cc/150?img=21',
        review: `A game-changer for organization. Tasks, calendars, notes – everything neatly synced. My life has never been this streamlined. Pure genius!`,
    },
    {
        id: 11,
        name: 'Hannah',
        role: 'Graphic Designer',
        avatar: 'https://i.pravatar.cc/150?img=18',
        review: `Drowning in a sea of creativity. The content here is a visual feast. An endless source of inspiration for my artistic endeavors.`,
    },
    {
        id: 5,
        name: 'Ian',
        role: 'CTO',
        avatar: 'https://i.pravatar.cc/150?img=33',
        review: `Discovering new beats is addictive with this service. The curated playlists are spot-on, and the personalized recommendations are eerily accurate. A music lover's paradise!`,
    },
];

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    const handleSlide = (direction) => {
        if (transitioning) return;
        setTransitioning(true);

        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = direction === 'prev' ? (REVIEWS.length + prevIndex - 1) % REVIEWS.length : (REVIEWS.length + prevIndex + 1) % REVIEWS.length;
                return newIndex;
            });
            setTransitioning(false);
        }, 500);
    };

    useEffect(() => {
        const firstCard = document.querySelector(".card");
        if (firstCard) {
            firstCard.classList.remove('opacity-0');
            firstCard.querySelector('blockquote').classList.remove('scale-0', 'before:-translate-y-full');
            firstCard.querySelector('.details').classList.remove('scale-0', 'translate-y-[150px]');
        }
    }, []);

    return (
        <div className="bgg text-slate-800 flex flex-col justify-center items-center min-h-screen relative px-4 min-w-full">
            <main className="bg-white my-4 w-full max-w-4xl rounded-3xl text-center p-8 sm:p-16">
                <h1 className="text-4xl font-bold">A word from our customers</h1>
                <p className="text-sm">We've been helping businesses do their best since 2018</p>
                <div className="mt-6 flex flex-row justify-center col-span-12">
                    <button data-slide="prev" className="material-symbols-outlined col-span-2 scale-150" onClick={() => handleSlide('prev')}><FcPrevious />
                    </button>
                    <div id="slider" className="[grid-area:slider] col-span-8">
                        <div id="list-cards" className="grid [grid-template-areas:'stack'] overflow-hidden justify-items-center">
                            {REVIEWS.map((review, idx) => (
                                <div key={review.id} className={`card [grid-area:stack] ${idx === currentIndex ? '' : 'opacity-0'} transition-opacity duration-500`}>
                                    <blockquote className={`bg-black text-white rounded-md p-6 text-sm transition-all duration-500 ${idx === currentIndex ? '' : 'scale-0 before:-translate-y-full'} text-center`}>
                                        "{review.review}"
                                    </blockquote>
                                    <div className={`details text-sm transition-all duration-500 flex flex-col items-center gap-2 mt-6 ${idx === currentIndex ? '' : 'scale-0 translate-y-[150px]'}`}>
                                        <img src={review.avatar} className="w-16 h-16 object-cover rounded-full" alt={`${review.name}`} />
                                        <div>
                                            <p className="text-sm font-bold">{review.name}</p>
                                            <p className="text-xs">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button data-slide="next" className="material-symbols-outlined col-span-2 scale-150" onClick={() => handleSlide('next')}><FcNext />
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Testimonial;
