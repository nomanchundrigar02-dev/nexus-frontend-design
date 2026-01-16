import { useState } from 'react';
import { Upload, FileText, Eye } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

type DocumentStatus = 'pending' | 'approved' | 'rejected';

interface DocumentItem {
    id: number;
    name: string;
    type: string;
    status: DocumentStatus;
}

export const DocumentChamberPage = () => {
    const [documents, setDocuments] = useState<DocumentItem[]>([
        {
            id: 1,
            name: 'Pitch Deck.pdf',
            type: 'PDF',
            status: 'pending',
        },
        {
            id: 2,
            name: 'Financial Report.xlsx',
            type: 'Excel',
            status: 'approved',
        },
        {
            id: 3,
            name: 'Business Plan.docx',
            type: 'Word',
            status: 'rejected',
        },
    ]);

    const handleUpload = () => {
        alert('Mock upload – backend not implemented');
    };

    const statusVariant = (status: DocumentStatus) => {
        switch (status) {
            case 'approved':
                return 'success';
            case 'rejected':
                return 'error';
            default:
                return 'warning';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Document Chamber</h2>
                        <Button leftIcon={<Upload size={16} />} onClick={handleUpload}>
                            Upload Document
                        </Button>
                    </div>
                </CardHeader>
            </Card>

            {/* Documents List */}
            <Card>
                <CardBody className="space-y-4">
                    {documents.map((doc) => (
                        <div
                            key={doc.id}
                            className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
                        >
                            <div className="flex items-center gap-3">
                                <FileText className="text-slate-500" size={20} />
                                <div>
                                    <p className="font-medium text-slate-800">{doc.name}</p>
                                    <p className="text-sm text-slate-500">{doc.type}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Badge variant={statusVariant(doc.status)}>
                                    {doc.status}
                                </Badge>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    leftIcon={<Eye size={14} />}
                                >
                                    Preview
                                </Button>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </div>
    );
};
