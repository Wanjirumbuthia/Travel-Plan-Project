"""updated models

Revision ID: 979467952a4a
Revises: 2980a3f6cb0e
Create Date: 2024-07-18 12:50:53.272979

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '979467952a4a'
down_revision = '2980a3f6cb0e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('activities', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image_url', sa.String(length=200), nullable=True))

    with op.batch_alter_table('categories', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image_url', sa.String(length=200), nullable=True))

    with op.batch_alter_table('trips', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image_url', sa.String(length=200), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('trips', schema=None) as batch_op:
        batch_op.drop_column('image_url')

    with op.batch_alter_table('categories', schema=None) as batch_op:
        batch_op.drop_column('image_url')

    with op.batch_alter_table('activities', schema=None) as batch_op:
        batch_op.drop_column('image_url')

    # ### end Alembic commands ###