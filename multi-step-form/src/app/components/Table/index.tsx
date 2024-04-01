import { Fragment } from "react"
import { DataList } from '@radix-ui/themes';

import apps from '@/data/apps.json'
interface TableProps {
  appName: string
}
const DataInfoComponent = ({ dataInfo }: any) => {
  const formatValue = (value: any) => {
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    if (typeof value === 'string' && value.startsWith('http')) {
      return <a href={value} target="_blank" rel="noopener noreferrer">Link</a>;
    }
    return value;
  };

  return (
    <Fragment>
      {Object.entries(dataInfo).map(([key, value]) => (
        <DataList.Item align="center" key={key}>
          <DataList.Label minWidth="88px">{key}</DataList.Label>
          <DataList.Value>
            {formatValue(value)}
          </DataList.Value>
        </DataList.Item>
      ))}
    </Fragment>
  );
};

export function PrivacyTable({ appName }: TableProps) {
  const app = apps.find(({ App }) => App === appName) || apps[0]
  return (
    <Fragment>
      <header className="flex flex-col gap-2 sm:gap-3">
        Privacy Criteria
      </header>

      <DataList.Root>
        <DataInfoComponent dataInfo={app} />
      </DataList.Root>
    </Fragment>
  )
} 