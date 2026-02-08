import Image from "next/image";
import { Star } from "lucide-react";

// TODO: 이 타입을 DB 모델과 연동
export interface Review {
    id: string;
    author: string;
    roomType: string;
    date: string;
    rating: number;
    content: string;
    image?: string;
}

interface ReviewCardProps {
    review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {/* Review Image (if exists) */}
            {review.image && (
                <div className="relative h-48">
                    <Image
                        src={review.image}
                        alt={`${review.author}의 후기`}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Review Content */}
            <div className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${i < review.rating
                                    ? "fill-secondary text-secondary"
                                    : "text-gray-300"
                                }`}
                        />
                    ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed line-clamp-4">
                    {review.content}
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-border/30">
                    <p className="font-medium text-primary">{review.author}</p>
                    <p className="text-sm text-muted-foreground">
                        {review.roomType} · {review.date}
                    </p>
                </div>
            </div>
        </div>
    );
}
