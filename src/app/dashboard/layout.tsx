export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <aside>Sidebar</aside>
            <div>{children}</div>
        </section>
    );
}