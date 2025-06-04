import { BaseLayout } from "@/components/layout/BaseLayout";

export default function Home() {
    return (
        <BaseLayout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center">
                    Welcome to Our Landing Page
                </h1>
            </div>
        </BaseLayout>
    );
}
