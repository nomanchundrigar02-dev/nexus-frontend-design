import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, ExternalLink, Video } from 'lucide-react';
import { Entrepreneur } from '../../types';
import { Card, CardBody, CardFooter } from '../ui/Card';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface EntrepreneurCardProps {
  entrepreneur: Entrepreneur;
  showActions?: boolean;
}

export const EntrepreneurCard: React.FC<EntrepreneurCardProps> = ({
  entrepreneur,
  showActions = true,
}) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/entrepreneur/${entrepreneur.id}`);
  };

  const handleMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/chat/${entrepreneur.id}`);
  };

  const handleVideoCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/video-call');
  };

  return (
    <Card
      hoverable
      className="h-full transition-all duration-300"
      onClick={handleViewProfile}
    >
      <CardBody className="flex flex-col">
        <div className="flex items-start">
          <Avatar
            src={entrepreneur.avatarUrl}
            alt={entrepreneur.name}
            size="lg"
            status={entrepreneur.isOnline ? 'online' : 'offline'}
            className="mr-4"
          />

          <div className="flex-1">
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              {entrepreneur.name}
            </h3>
            <p className="mb-2 text-sm text-gray-500">
              {entrepreneur.startupName}
            </p>

            <div className="mb-3 flex flex-wrap gap-2">
              <Badge variant="primary" size="sm">
                {entrepreneur.industry}
              </Badge>
              <Badge variant="gray" size="sm">
                {entrepreneur.location}
              </Badge>
              <Badge variant="accent" size="sm">
                Founded {entrepreneur.foundedYear}
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h4 className="mb-1 text-sm font-medium text-gray-900">
            Pitch Summary
          </h4>
          <p className="line-clamp-3 text-sm text-gray-600">
            {entrepreneur.pitchSummary}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">Funding Need</span>
            <p className="text-sm font-medium text-gray-900">
              {entrepreneur.fundingNeeded}
            </p>
          </div>

          <div>
            <span className="text-xs text-gray-500">Team Size</span>
            <p className="text-sm font-medium text-gray-900">
              {entrepreneur.teamSize} people
            </p>
          </div>
        </div>
      </CardBody>

      {showActions && (
        <CardFooter className="flex justify-between gap-2 border-t border-gray-100 bg-gray-50">
          <Button
            variant="outline"
            size="sm"
            leftIcon={<MessageCircle size={16} />}
            onClick={handleMessage}
          >
            Message
          </Button>

          <Button
            variant="secondary"
            size="sm"
            leftIcon={<Video size={16} />}
            onClick={handleVideoCall}
          >
            Video Call
          </Button>

          <Button
            variant="primary"
            size="sm"
            rightIcon={<ExternalLink size={16} />}
            onClick={handleViewProfile}
          >
            View Profile
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
