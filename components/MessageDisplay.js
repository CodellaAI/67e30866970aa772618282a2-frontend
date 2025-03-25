
import { AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';

export default function MessageDisplay({ message, loading, error }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-6">
        <RefreshCw className="animate-spin h-6 w-6 text-primary-500 mr-2" />
        <span className="text-gray-600">Loading message...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-start">
        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
        <div>
          <h3 className="text-sm font-medium text-red-800">Error</h3>
          <p className="mt-1 text-sm text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-green-50 border border-green-100 rounded-lg p-6 animate-fade-in">
      <div className="flex items-center mb-2">
        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
        <h3 className="text-lg font-medium text-green-800">Message from Server</h3>
      </div>
      <p className="text-green-700 text-lg">{message || 'No message received'}</p>
    </div>
  );
}
