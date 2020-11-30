import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbotest2',
  connector: 'mssql',
  url: 'mssql://Leo:123soleado@DESKTOP-K9PGG23/Stock_Manager',
  host: 'DESKTOP-K9PGG23',
  port: 1433,
  user: 'Leo',
  password: '123soleado',
  database: 'Stock_Manager'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Dbotest2DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbotest2';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbotest2', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
