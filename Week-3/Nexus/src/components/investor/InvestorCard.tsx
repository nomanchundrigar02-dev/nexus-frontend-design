import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, ExternalLink, Video } from 'lucide-react';
import { Investor } from '../../types';
import { Card, CardBody, CardFooter } from '../ui/Card';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface InvestorCardProps {
  investor: Investor;
  showActions?: boolean;
}

export const InvestorCard: React.FC<InvestorCardProps> = ({
  investor,
  showActions = true,
}) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/investor/${investor.id}`);
  };

  const handleMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/chat/${investor.id}`);
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
            src={investor.avatarUrl}
            alt={investor.name}
            size="lg"
            status={investor.isOnline ? 'online' : 'offline'}
            className="mr-4"
          />

          <div className="flex-1">
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              {investor.name}
            </h3>
            <p className="mb-2 text-sm text-gray-500">
              Investor • {investor.totalInvestments} investments
            </p>

            <div className="mb-3 flex flex-wrap gap-2">
              {investor.investmentStage.map((stage, index) => (
                <Badge key={index} variant="secondary" size="sm">
                  {stage}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h4 className="mb-1 text-sm font-medium text-gray-900">
            Investment Interests
          </h4>
          <div className="flex flex-wrap gap-2">
            {investor.investmentInterests.map((interest, index) => (
              <Badge key={index} variant="primary" size="sm">
                {interest}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="line-clamp-2 text-sm text-gray-600">
            {investor.bio}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">Investment Range</span>
            <p className="text-sm font-medium text-gray-900">
              {investor.minimumInvestment} - {investor.maximumInvestment}
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
