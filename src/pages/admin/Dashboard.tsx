import { Link } from 'react-router-dom';
import { Calendar, Mic, Users, Newspaper, Settings, ArrowRight } from 'lucide-react';
import { useData } from '@/contexts/DataContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminDashboard() {
  const { events, speakers, teamMembers, newsPosts } = useData();

  const stats = [
    { label: 'Events', value: events.length, icon: Calendar, href: '/admin/events' },
    { label: 'Speakers', value: speakers.length, icon: Mic, href: '/admin/speakers' },
    { label: 'Team Members', value: teamMembers.length, icon: Users, href: '/admin/team' },
    { label: 'News Posts', value: newsPosts.length, icon: Newspaper, href: '/admin/news' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link key={stat.label} to={stat.href}>
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link 
              to="/admin/events" 
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <span className="font-medium">Manage Events</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/admin/speakers" 
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <span className="font-medium">Manage Speakers</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/admin/team" 
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <span className="font-medium">Manage Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/admin/settings" 
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
            >
              <span className="font-medium">Site Settings</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is a mock admin panel. All data is stored in memory and will reset on page refresh.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              In the real implementation, this would show recent edits and activity logs from your database.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
