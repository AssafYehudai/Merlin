export interface UserData {
    username: string;
    displayName: string;
    bio_ai: string;
    avatar: string;
    followers: number;
    posts: Array<{
        id: string;
        mediaUrl: string;
        type: string;
    }>;
}

export interface TemplateProps {
    userData: UserData;
    onEditPress?: () => void;
    onLogoutPress?: () => void;
}
